import React from 'react'

function ExecNav(props) {

    const {
        showInventory, 
        setShowInventory,
        showAddInventory,
        setShowAddInventory,
        showExecs,
        setShowExecs,
        showAddExec,
        setShowAddExec
    } = props;
    return (
        <div>
            <button onClick={() => setShowInventory(!showInventory)}>View Inventory</button>
            <button onClick={() => setShowAddInventory(!showAddInventory)}>Add Inventory</button>
            <button onClick={() => setShowExecs(!showExecs)}>View Team</button>
            <button onClick={() => setShowAddExec(!showAddExec)}>Add Sales Executive</button>

        </div>
    )
}

export default ExecNav;
