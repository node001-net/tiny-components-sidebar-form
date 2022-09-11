/**
 *  mixin extends sidebarForm
 *
 *  @author Björn Hase <me@herr-hase.wtf>
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/tiny-components/sidebar-form
 *
 */

export default {

    state: {
        open: false,       // if sidebar is open
        isLoading: false,  // if loading is shown
        current: {         // current data of form

        }
    },

    /**
     *  close current sidebar
     *
     */
    handleClose() {
        this.reset()

        this.state.isOpen = false
        this.update()
    },

    /**
     *  getting css classes for sidebar
     *
     *
     *  @return {String}
     *
     */
    getCssClasses() {
        const classes = [
            'sidebar'
        ]

        if (this.state.isOpen === true) {
            classes.push('sidebar--open')
        }

        return classes.join(' ')
    },

    /**
     *
     *
     *
     */
    onBeforeMount() {
        if (!this.hasOwnProperty('reset')) {
            throw new Error('reset-Function in Form is missing')
        }

        this.reset()
    }
}