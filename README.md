# Tiny Components - Sidebar Form

Created with [Riot.js](https://riot.js.org)

Handle Form in a Sidebar. Sidebar is from [Plain-UI](https://plain-ui.com).

## Install

```
npm install @tiny-components\sidebar-form --save
```

## How to use

There are Multiple Components to use this Form. 

```js
<tiny-sidebar-form form-id="example-form" open={ state.isOpen } close={ () => { handleClose() }} loading={ state.isLoading }>

    <!-- slot:title -->
    <span slot="title">
        New
    </span>

    <!-- slot:header -->
    <form id="example-form" class="form" slot="form" onsubmit={ (event) => { handleSubmit(event) }}>
        <div class="field-group">
            <label class="field-label">
                Note
                <textarea class="field-text" name="name"></textarea>
            </label>
        </div>
    </form>

</tiny-sidebar-form>
```
