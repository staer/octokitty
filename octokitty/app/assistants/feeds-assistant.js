var FeedsAssistant;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
FeedsAssistant = (function() {
  __extends(FeedsAssistant, KittyAssistant);
  function FeedsAssistant() {
    this.toggleSearchBox = __bind(this.toggleSearchBox, this);;
  }
  FeedsAssistant.prototype.setup = function() {
    FeedsAssistant.__super__.setup.call(this);
    this.searchBoxModel = {
      visible: false
    };
    this.scrim = Mojo.View.createScrim(this.controller.document, {
      scrimClass: 'palm-scrim'
    });
    this.scrim.hide();
    this.controller.get("myScrim").appendChild(this.scrim);
    this.controller.setupWidget(Mojo.Menu.viewMenu, {}, this.viewMenuModel = {
      visible: true,
      items: [
        {
          items: [
            {}, {
              icon: 'search',
              label: 'Back',
              command: 'cmd-search'
            }, {
              label: 'octokitty',
              width: 200
            }, {
              icon: 'forward',
              label: 'Fwd',
              command: 'cmd-something-else'
            }, {}
          ]
        }
      ]
    });
    this.controller.setupWidget(Mojo.Menu.commandMenu, {}, this.commandMenuModel = {
      visible: true,
      items: [
        {
          toggleCmd: 'cmd-news-feed',
          items: [
            {}, {
              label: "News Feed",
              command: 'cmd-news-feed'
            }, {
              label: "My Activity",
              command: 'cmd-my-activity'
            }, {}
          ]
        }
      ]
    });
    this.controller.setupWidget("feedList", {
      itemTemplate: "feeds/templates/feedListRowTemplate",
      swipeToDelete: false,
      renderLimit: 40,
      reorderable: false
    }, this.feedListModel = {
      items: [
        {
          title: "item 1",
          text: 'description 1'
        }, {
          title: "item 2",
          text: 'description 2'
        }, {
          title: "item 3",
          text: 'description 3'
        }, {
          title: "item 4",
          text: 'description 4'
        }, {
          title: "item 5",
          text: 'description 5'
        }, {
          title: "item 6",
          text: 'description 6'
        }, {
          title: "item 7",
          text: 'description 7'
        }, {
          title: "item 8",
          text: 'description 8'
        }, {
          title: "item 9",
          text: 'description 9'
        }, {
          title: "item 10",
          text: 'description 10'
        }, {
          title: "item 11",
          text: 'description 11'
        }
      ]
    });
    this.controller.setupWidget("txtSearchTerm", {
      hintText: 'Enter search terms here',
      multiline: false,
      enterSubmits: true,
      focus: true
    }, {
      value: "",
      disalbed: false
    });
    this.controller.setupWidget("btnCancel", {}, {
      label: "Cancel",
      buttonClass: "negative"
    });
    this.controller.listen("btnCancel", Mojo.Event.tap, this.toggleSearchBox);
    return this.controller.setupWidget("btnSearch", {}, {
      label: "Search",
      buttonClass: "secondary"
    });
  };
  FeedsAssistant.prototype.toggleSearchBox = function(event) {
    if (this.searchBoxModel.visible) {
      this.controller.get("searchMenu").setStyle({
        display: "none"
      });
      this.searchBoxModel.visible = false;
      this.scrim.hide();
      this.commandMenuModel.visible = true;
      return this.controller.modelChanged(this.commandMenuModel);
    } else {
      this.controller.get("searchMenu").setStyle({
        display: "block"
      });
      this.searchBoxModel.visible = true;
      this.scrim.show();
      this.commandMenuModel.visible = false;
      this.controller.modelChanged(this.commandMenuModel);
      return this.controller.get("txtSearchTerm").mojo.focus();
    }
  };
  FeedsAssistant.prototype.handleCommand = function(event) {
    if (event.type === Mojo.Event.command) {
      switch (event.command) {
        case 'cmd-search':
          return this.toggleSearchBox();
      }
    }
  };
  return FeedsAssistant;
})();