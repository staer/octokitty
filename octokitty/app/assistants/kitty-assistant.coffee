class KittyAssistant
    constructor: ->
        
    setup: ->
        # Set up the application menu that is used by most if not all of the scenes
        @kittyMenuAttributes = { omitDefaultItems: true };
        @kittyMenuModel = {
            visible: yes,
            items: [
                Mojo.Menu.editItem,
                {label: 'Custom command!', command: 'cmd-custom'},
                Mojo.Menu.prefsItem,
                Mojo.Menu.helpItem
            ]
        };        
        @controller.setupWidget(Mojo.Menu.appMenu, @kittyMenuAttributes, @kittyMenuModel);