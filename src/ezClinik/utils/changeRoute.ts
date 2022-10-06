/**
 * @description Change Route of System.
 * @param path New System Path.
 */
 export function changeRoute(path:string) {
    window.location.href = path
}

/**
 * @description Check Current Path Name.
 * @returns Current Path Name.
 */
 export function verifyCurrentPathName() {
    return window.location.pathname;
}