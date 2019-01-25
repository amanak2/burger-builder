import React from "react"
import styles from "./Layout.css"
import Aux from "../../hoc/Aux"

const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer , Backdrop</div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;
