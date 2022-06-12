# Tiny Components - Sidebar Form

Created with [Riot.js](https://riot.js.org)

Handle Form in a Sidebar. Sidebar is from [Plain-UI](https://plain-ui.com).

## Install

```
npm install @tiny-components\sidebar-form --save
```

## How to use

Create your own Component that will include a form. The Tiny Sidebar Form uses Slot.

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

You have to add the Mixin "sidebarFormMixin.js".

```js
export default () => {
    return {

        ...sidebar,  // adding basic funtion for sidebar
```

Add Function to handle the submit.

```js
handleSubmit(event) {
    event.preventDefault()

    this.state.isLoading = true
    this.update()
    ...
```

You can find a full Example in src/ and a running version under example/.
