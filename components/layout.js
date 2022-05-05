import Nav from "./nav"

function Layout(props) {
  return (
    <>
        <Nav />
        <main>{props.children}</main>
    </>
  )
}

export default Layout