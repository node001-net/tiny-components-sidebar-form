# Tiny Components - Sidebar Form

Created with [Riot.js](https://riot.js.org)

Handle Form in a Sidebar. Styles for Sidebar based on [Plain-UI](https://plain-ui.com).

## Changelog

0.1.0 Init
1.0.0 Remove "SidebarForm" and build a more basic Solution, that is also easier to adept 

## Install

```
npm install @tiny-components\sidebar-form --save
```

## How to use

Create your own Component and add tiny

```js
<div class={ getCssClasses() }>

    <div class="sidebar__inner">

        <!-- header -->
        <tiny-sidebar-form-header title="{ !state.current.note ? 'New' : 'Edit' }" close={ (event) => { handleClose(event) }}></tiny-sidebar-form-header>

        <div class="sidebar__form">
            <form class="form" novalidate method="post" onsubmit={ (event) => { handleSubmit(event) } }>

                <!-- body -->
                <div class="sidebar__body">
                    <div class="field-group">
                        <label class="field-label">
                            Note
                            <textarea class="field-text" name="note"></textarea>
                        </label>
                    </div>

                    <!-- loading -->
                    <tiny-loading active={ state.isLoading }></tiny-loading>
                </div>

                <!-- footer -->
                <tiny-sidebar-form-footer active={ state.isLoading }></tiny-sidebar-form-footer>

            </form>
        </div>
    </div>
</div>
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
