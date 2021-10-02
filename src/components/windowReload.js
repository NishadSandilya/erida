//This function will reload the window after 500ms

export const reloadWindow = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            window.location.reload(true)
        }, 500)
    })
}