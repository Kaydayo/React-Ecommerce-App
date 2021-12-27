import { Component } from "react";

export default class CustomersList extends Component {
    state = {
        pageTitle: "Customers", customersCount: 5, customers: [
            { id: 1, name: "scott", phone: 23456789909, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1013/60" },
            { id: 2, name: "cott", phone: 23456789909, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1011/60" },
            { id: 3, name: "ott", phone: null, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1000/60" },
            { id: 4, name: "mott", phone: 23456789909, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1005/60" },
            { id: 5, name: "bott", phone: 23456789909, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1019/60" },
            { id: 6, name: "ceott", phone: null, address: { city: "1 allen avenue, idumota, lagos" }, photo: "https://picsum.photos/id/1018/60" }
        ]
    }

    render() {
        return <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}
                <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button></h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Photo</th>
                        <th>Customer name</th>
                        <th> Phone</th>
                        <th> City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customers.map((customer, index) => {
                            return <tr className="m-1" key={customer.id}>
                                <td>{customer.id}</td>
                                <td><img src={customer.photo} alt="Customer" />
                                    <div><button className="btn btn-secondary" onClick={()=>{this.onChangePicture(customer, index)}}>Change picture</button></div></td>
                                <td>{customer.name}</td>
                                <td>{customer.phone == null ? "no phone" : customer.phone}</td>
                                <td>{customer.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    }

    onRefreshClick = () => {
        this.setState({
            customersCount: 8
        })
    }

    onChangePicture = (customer, index) => {
        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/104/60"
        this.setState({ customers: custArr })
    }
}