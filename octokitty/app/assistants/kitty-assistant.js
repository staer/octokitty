var KittyAssistant;
KittyAssistant = (function() {
  function KittyAssistant() {}
  KittyAssistant.prototype.setup = function() {
    this.kittyMenuAttributes = {
      omitDefaultItems: true
    };
    this.kittyMenuModel = {
      visible: true,
      items: [
        Mojo.Menu.editItem, {
          label: 'Custom command!',
          command: 'cmd-custom'
        }, Mojo.Menu.prefsItem, Mojo.Menu.helpItem
      ]
    };
    return this.controller.setupWidget(Mojo.Menu.appMenu, this.kittyMenuAttributes, this.kittyMenuModel);
  };
  return KittyAssistant;
})();