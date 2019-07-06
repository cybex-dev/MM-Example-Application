# MM-Example-Application

## Setup
Please ```package.json``` and ```test_app.js``` inside a folder named ```test_app``` (node the primary ```.js``` file and the containing folder should have the same name)

Place folder inside ```MagicMirror/modules/```
Output is ```MagicMirror/modules/test_app```

### Folder layout:
```
test_app\
          package.json
          test_app.js
```
                          
## Configuration Entry
place the following inside the configuration file of MagicMirror i.e. ```MagicMirror/config/config.js``` under the `modules` entry:

```
}
    module: "test_app",
    position: "bottom_right",
    config: {
        count: 200
    }
}
```
