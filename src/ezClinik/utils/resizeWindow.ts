/**
 * @description Get Width and Height of Client;
 */
export function resizeWindow() {
    let width = 0;
    let height = 0;

    if (window.innerWidth) {
      width = window.innerWidth;
    }
    if (window.innerHeight) {
        height = window.innerHeight;
    }
    return {width, height};
  }