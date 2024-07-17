import React from 'react';

const Departments = () => (
    <div className='depts'>
    <div class="topic">
    
    <h2 className='topics'>Departments</h2>
    </div>
        <table>
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Student Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AI/DS</td>
                    <td>140</td>
                </tr>
                <tr>
                    <td>AI/ML</td>
                    <td>160</td>
                </tr>
                <tr>
                    <td>CSE</td>
                    <td>320</td>
                </tr>
                <tr>
                    <td>IT</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>ECE</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>EEE</td>
                    <td>160</td>
                </tr>
                <tr>
                    <td>Mechanical</td>
                    <td>140</td>
                </tr>
                {/* Add more departments as needed */}
            </tbody>
        </table>
        </div>
);

export default Departments;