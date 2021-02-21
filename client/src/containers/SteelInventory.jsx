import DataList from '../components/DataList';
import CheckBox from '../components/CheckBox';

const SteelInventory = (props) => {

    const heads = [
        { label: 'Grade', id: 'grade' },
        { label: 'Section', id: 'section'},
        { label: 'Heat No', id: 'heatNo'},
        { label: 'Heat Code', id: 'heatCode'},
        { label: 'Received Quantity (Kg)', id: 'receivedQty'},
        { label: 'Available Quantity (Kg)', id: 'availableQty'}
    ];

    const data = [
        {
            name: 'steel1',
            row: [
                { colName: 'selectBox', result: <CheckBox name="selectSteel" id="selectSteels" />},
                { colName: 'grade', result: '20MnCr5' },
                { colName: 'section', result: '63 RCS' },
                { colName: 'heatNo', result: '24803' },
                { colName: 'heatCode', result: null},
                { colName: 'receivedQty', result: 24650 },
                { colName: 'availableQty', result: 4630}
            ]
        },
        {
            name: 'steel2',
            row: [
                { colName: 'selectBox', result: <CheckBox name="selectSteel" id="selectSteels" />},
                { colName: 'grade', result: 'SAE 8620H' },
                { colName: 'section', result: '90 DIA' },
                { colName: 'heatNo', result: '24804' },
                { colName: 'heatCode', result: 'JDY'},
                { colName: 'receivedQty', result: 24650 },
                { colName: 'availableQty', result: 4630}
            ]
        },
        {
            name: 'steel3',
            row: [
                { colName: 'selectBox', result: <CheckBox name="selectSteel" id="selectSteels" />},
                { colName: 'grade', result: 'SAE 8620H' },
                { colName: 'section', result: '90 DIA' },
                { colName: 'heatNo', result: '24803' },
                { colName: 'heatCode', result: 'JDU'},
                { colName: 'receivedQty', result: 16700 },
                { colName: 'availableQty', result: 10506}
            ]
        }
    ];
        return (
            <DataList heads = {heads} body = {data} />
    )
}

export default SteelInventory;