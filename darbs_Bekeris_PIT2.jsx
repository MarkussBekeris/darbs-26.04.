(function () {
    var g;
    var p;
    var w;
    var btnCancel;
    var btnFolderInput;
    var btnOk;
    var txtFolderInput;
    
    w = new Window("dialog", "Adobe pamaciba - Bekeris PIT2");
    p = w.add("panel");
    g = p.add("group");
    btnFolderInput = g.add("button", undefined, "Folder...");
    txtFolderInput = g.add("statictext", undefined, "", {
        truncate: "middle"
    });
    txtFolderInput.preferredSize = [200, -1];
    g = w.add("group");
    g.alignChildren = "center";
    btnOk = g.add("button", undefined, "OK");
    btnCancel = g.add("button", undefined, "Cancel");
    btnFolderInput.onClick = function () {
        var f = Folder.selectDialog();
        if (f) {
            txtFolderInput.text = f.fullName;
        }
    };
    btnOk.onClick = function () {
        w.close(1);
    };
    btnCancel.onClick = function () {
        w.close(0);
    };
    if (w.show() == 1) {
        process();
    }
    function process() {
        alert("kkas notiek");
    }
})();