//jshint esversion:6

exports.getDate = () => {
    return new Date().toLocaleDateString('mr-IN', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })
}

exports.getDay = () => {
    return new Date().toLocaleDateString('mr-IN', { weekday: 'long' })
}
