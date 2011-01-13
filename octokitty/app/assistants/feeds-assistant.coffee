class FeedsAssistant extends KittyAssistant
    constructor: ->
           
    setup: ->
        super()
        
        @searchBoxModel = {
            visible: no
        }
        @scrim = Mojo.View.createScrim(@controller.document, { scrimClass:'palm-scrim'} );
        @scrim.hide();
        @controller.get("myScrim").appendChild(@scrim)
        
        
        # Menu at the top of the screen
        @controller.setupWidget(Mojo.Menu.viewMenu, {
            menuClass: "aboveScrim"
        }, @viewMenuModel = {
            visible: yes,
            items: [
                {
                    items: [
                        {},
                        {icon: 'search', label: 'Back', command: 'cmd-search'},
                        {label: 'octokitty', width: 200},
                        {icon: 'forward', label: 'Fwd', command: 'cmd-something-else'},
                        {}
                    ]
                }
            ]
        })
        
        # Menu at the bottom of the screen
        @controller.setupWidget(Mojo.Menu.commandMenu, {
            menuClass: "belowScrim"
        }, @commandMenuModel = {
            visible: yes,
            items: [
                {
                    toggleCmd: 'cmd-news-feed',
                    items: [
                        { },
                        { label: "News Feed", command: 'cmd-news-feed' },
                        { label: "My Activity", command: 'cmd-my-activity' },
                        { }
                    ]
                }
            ]
        })
                    
        # Setup the main scrolling widget
        @controller.setupWidget("feedList", {
            itemTemplate: "feeds/templates/feedListRowTemplate",
            swipeToDelete: no,
            renderLimit: 40,
            reorderable: no
        }, @feedListModel = {
            items: [
                {title: "item 1", text: 'description 1'},
                {title: "item 2", text: 'description 2'},
                {title: "item 3", text: 'description 3'},
                {title: "item 4", text: 'description 4'},
                {title: "item 5", text: 'description 5'},
                {title: "item 6", text: 'description 6'},
                {title: "item 7", text: 'description 7'},
                {title: "item 8", text: 'description 8'},
                {title: "item 9", text: 'description 9'},
                {title: "item 10", text: 'description 10'},
                {title: "item 11", text: 'description 11'},
            ]
        })
        
        
        @controller.setupWidget("txtSearchTerm", {
            hintText: 'Enter search terms here',
            multiline: no,
            enterSubmits: yes,
            focus: yes
        }, {
            value: "",
            disalbed: no
        })
        
        @controller.setupWidget("btnCancel", {}, {
            label: "Cancel",
            buttonClass: "negative"
        })
        @controller.listen("btnCancel", Mojo.Event.tap, @toggleSearchBox )
        
        
        @controller.setupWidget("btnSearch", {}, {
            label: "Search",
            buttonClass: "secondary"
        })
        
    toggleSearchBox: (event) =>
        if @searchBoxModel.visible
            @controller.get("searchMenu").setStyle({display: "none"});
            @searchBoxModel.visible = no
            @scrim.hide()
        else
            @controller.get("searchMenu").setStyle({display: "block"});
            @searchBoxModel.visible = yes
            @scrim.show()            
            @controller.get("txtSearchTerm").mojo.focus()
        
        
    
    handleCommand: (event) ->
        if event.type == Mojo.Event.command
            switch event.command
                when 'cmd-search'
                    @toggleSearchBox()