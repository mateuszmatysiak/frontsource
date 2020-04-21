export default () => {
    return `&[title]:hover:after {
        content: attr(title);
        position: absolute;
        display: none;
    }`
}