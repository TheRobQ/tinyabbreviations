//regsiter a new plugin, the first parameter is the name we will  add to the plugin config, and then the function
tinymce.PluginManager.add('abbreviate', function(editor) {
        // Use the editor API to create a button. The first argument is the name we will add to the toolbar.
        editor.addButton('abbrButton', {
          //text to display in the button on the toolbar
            text: 'Abbr',
            //We don't have an icon
            icon: false,
            onclick: () => {
                // Open a new dialog using the editor's API this is how tiny manages all of its own dialogs.
                editor.windowManager.open( {
                    title: 'Abbreviate',
                    body: [
                        {
                            type: 'textbox',
                            // give the new window a name we can access
                            name: 'completeName',
                            label: 'Title'
                        }
                    ],
                    onsubmit:  (event) => {
                      console.log(event.data.completeName);
                      //Get the value from the dialog
                        let myTitle = event.data.completeName;
                        //Get the content of the selected text
                        let selection =
                        editor.selection.getContent();
                        //Put the content back
                        editor.selection.setContent(
                          // add the <abbr> inline tags, give the text an attribute, and pass the text. The tag will be automatically closed
                         editor.dom.createHTML( 'abbr', { title :myTitle }, selection ) );
                      }
                });
            }
    })
})
