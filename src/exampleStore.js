/**
 *  example store for trigger open
 *
 *  @author Björn Hase
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/tiny-components/sidebar-form
 *
 */

 import observable from '@riotjs/observable'

 export default observable({

     /**
      *
      *  @param {object} data
      *
      */
     open() {
         this.trigger('open')
     }

 })