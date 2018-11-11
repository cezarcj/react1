import React, { Component } from 'react';
import styles from '../Form.css';

class Form extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }
    render() {
        return (
            <div class={styles.container}>
                <form onSubmit={this.handleSubmit} >
                <div class={styles["row"]}>
                    <div class={styles["col-25"]}>
                        <label for="fname">First Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" name="firstname"/>
                    </div>
                </div>
                <div class={styles["row"]}>
                    <div class={styles["col-25"]}>
                        <label for="lname">Last Name</label>
                    </div>
                    <div class={styles["col-75"]}>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["col-25"]}>
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className={styles["col-75"]}>
                        <input type="text" id="age" name="Age" placeholder="Your age.."/>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["col-25"]}>
                        <label htmlFor="address">Address</label>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["col-75"]}>
                        <input type="text" id="address" name="Address" placeholder="Your address.."/>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["col-25"]}>
                        <label htmlFor="lname">E-mail</label>
                    </div>
                </div>
                <div className={styles["row"]}>
                    <div className={styles["col-75"]}>
                        <input type="text" id="lname" name="email" placeholder="Your email.."/>
                    </div>
                </div>
                <div className={styles["row"]}>
                     <div className={styles["col-25"]}>
                       <label htmlFor="lname">Last Name</label>
                    </div>
                </div>
                <div className={styles["col-75"]}>
                    <input type="text" id="lname" name="phone" placeholder="Your phone number.."/>
                </div>
                <div class={styles["row"]}>
                    <button type="submit" className={styles["form-button"]}>Submit</button>
                    <label>
                        <input type="checkbox" name="Freelance"> Freelance</input>
                    </label>
                </div>
            </form>
        </div>)
     };
    }



    export default Form;