# edgematserChart

## javascript code convention
- 
## vue code convention
Javascript code should be this.

- File name
    - vue file name have **first letter UpperCase** + **camelCase**<br>
    ```ex) Main.vue, GroupFilter.vue```
    - javascript file name have **all LowerCase**<br>
    ```ex) common.js, index.js, viewstate.js```
    - img file name have '**-**'<br>
    ```ex) add-pin.m.png, i-machbase-1.png ...```
- Variable name
    - Start first letter of variable name '**s**' : local variable, data() variable<br>
        ```ex) sResult, sTagName, sSaveName ...```
    - Start first letter of variable name '**g**' : global varible, vuex store variable<br>
        ```ex) gEdgeInfoList, gViewMode, gSaveName ...```
    - Start first letter of variable name '**c**' : computed function name<br>
        ```ex) cTagCount(){ ... }, cResultCount() { ... }```
    - Start first letter of variable name '**a**' : method parameters <br>
        ```ex) cTagCount(aTagName, aIdx){ ... }, cResultCount() { ... }```
    

- method name
    - verb + noun<br>
    ```ex) handleClickBtn() { ... }```