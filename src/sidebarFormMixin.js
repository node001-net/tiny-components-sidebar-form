/**
 *  Mixin to Extend a Sidebar
 *
 *  @author Björn Hase
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/tiny-components/sidebar-form
 *
 */

export default {

    state: {
        isOpen: false,    // if sidebar is open
        isLoading: false  // if loading is shown
    },

    /**
     *  close current sidebar
     *
     */
    handleClose() {
        this.state.isOpen = false
        this.reset()

        this.update()
    },

    /**
     *
     *
     */
    onBeforeMount() {
        this.reset()
    },

    /**
     *  function to reset current form data
     *  will call before Mount and after close  
     *
     */
    reset() {

    }
}