import PageTitle from "../../Shared/PageTitle/PageTitle"

const AllPatients = () => {
    return (
        <div>
            <PageTitle title={'All Patients'} mainPage='Patients' page={'All Patients'}></PageTitle>
            <div className="overflow-x-auto bg-white my-4 shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border text-lg">
                            <th className="border">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="border">Patiend ID</th>
                            <th className="border">Patient Name</th>
                            <th className="border">Age</th>
                            <th className="border">Phone</th>
                            <th className="border">Last Visit</th>
                            <th className="border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className="border">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className="border">
                                <p>PT-2003</p>
                            </td>
                            <td className="border">
                               <p>Rakib</p>
                            </td>
                            <td className="border">24</td>
                            <td className="border">01571140796</td>
                            <td className="border">12-03-23232</td>
                            <th className="border">
                                <p className="bg-primaryColor text-center text-white font-normal p-[2px] rounded">Copmate</p>
                            </th>
                        </tr>

                        <tr>
                            <th className="border">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className="border">
                                <p>PT-2003</p>
                            </td>
                            <td className="border">
                               <p>Rakib</p>
                            </td>
                            <td className="border">24</td>
                            <td className="border">01571140796</td>
                            <td className="border">12-03-23232</td>
                            <th className="border">
                                <p className="bg-yellow-400 text-center text-white font-normal p-[2px] rounded">Pending</p>
                            </th>
                        </tr>

                        <tr>
                            <th className="border">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className="border">
                                <p>PT-2003</p>
                            </td>
                            <td className="border">
                               <p>Rakib</p>
                            </td>
                            <td className="border">24</td>
                            <td className="border">01571140796</td>
                            <td className="border">12-03-23232</td>
                            <th className="border">
                                <p className="bg-primaryColor text-center text-white font-normal p-[2px] rounded">Copmate</p>
                            </th>
                        </tr>
                        
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default AllPatients