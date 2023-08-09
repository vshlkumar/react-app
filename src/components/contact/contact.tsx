import { Button, FormLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Component, ReactNode, SyntheticEvent } from "react";
import MobxReactForm from 'mobx-react-form';
import { getFormValidation } from "../mobxForm";
import { inject, observer } from "mobx-react";
import AppStore from "../../store/app.store";

const fields = {
    firstName: {
        label: 'FirstName',
        placeholder: 'Insert FirstName',
        rules: 'required|string|between:5,25'
    },
    lastName: {
        label: 'LastName',
        placeholder: 'Insert LastName',
        rules: 'required|string|between:5,25'
    },
    email: {
        label: 'email',
        placeholder: 'Insert Email',
        rules: 'required'
    }
}

type Props = {
    appStore?: AppStore
}
class ContactComponent extends Component<Props> {

    form: MobxReactForm;

    constructor(props: any) {
        super(props)
        this.form = getFormValidation(fields);
    }

    public handleSubmit = (e: SyntheticEvent) => {        
        e.preventDefault();
        const {appStore} = this.props;
        if (this.form.isValid) {
            // Handle your form submission logic here
            console.log("Form is valid. Submitting...");            
            const { firstName, lastName, email } = this.form.values();
            appStore?.addContact(firstName, lastName, email);
        } else {
            this.form.showErrors();
            console.log("Form is not valid. Please check the fields.");
        }
    };

    render(): ReactNode {
        return (
            <div>
                <div>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField {...this.form.$('firstName').bind()} />
                            <p>{this.form.$('firstName').error}</p>
                        </div>
                        <div>
                            <TextField {...this.form.$('lastName').bind()} />
                            <p>{this.form.$('lastName').error}</p>
                        </div>
                        <div>
                            <TextField {...this.form.$('email').bind()} />
                            <p>{this.form.$('email').error}</p>
                        </div>

                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>

                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>FirstName</TableCell>
                                    <TableCell align="right">LastName</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.appStore?.contacts.map((row, index) => (
                                    <TableRow
                                        key={index}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.firstName}
                                        </TableCell>
                                        <TableCell align="right">{row.lastName}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default inject('appStore')(observer(ContactComponent));
