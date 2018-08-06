tinymce.PluginManager.add('abbreviate', function(editor, url) {
        // Add a button that opens a window
        editor.addButton('Abbreviate', {
            text: 'Abbr',
            icon: false,
            onclick: () => {
                // Open window
                editor.windowManager.open({
                    title: 'Abbreviate',
                    body: [
                        {   type: 'textbox',
                            size: 90,
                            name: 'Title',
                            label: 'Title'
                        }
                    ],
                    onsubmit:  (event) => {
                        // get the title
                        let myTitle = event.data.Title;
                        let fullName = document.createElement('abbr');
                        fullName.setAttribute('title', myTitle);
                        let selection = tinymce.activeEditor.selection.getContent()
                        editor.selection.setContent('<abbr title='+myTitle +'>'+ selection + '</abbr>');
                      }
                });
            }
    })
})
