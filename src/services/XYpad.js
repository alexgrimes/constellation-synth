export default createCircle = () => {
   return [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
}