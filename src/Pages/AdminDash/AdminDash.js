import React, { useState } from 'react'
import AdminNav from '../../Components/AdminNav/AdminNav';
import Inventory from '../../Components/Inventory/Inventory';
import AddInventory from '../../Components/AddInventory/AddInventory';
import Execs from '../../Components/Execs/Execs';
import AddExec from '../../Components/AddExec/AddExec';

function ExecDash(props) {
    const [showInventory, setShowInventory] = useState(true);
    const [showAddInventory, setShowAddInventory] = useState(false); 
    const [showExecs, setShowExecs] = useState(false);
    const [showAddExec, setShowAddExec] = useState(false);
    return (
        <div>
            Hello Admin!
            <AdminNav 
                showInventory={showInventory}
                setShowInventory={setShowInventory}
                showAddInventory={showAddInventory}
                setShowAddInventory={setShowAddInventory}
                showExecs={showExecs}
                setShowExecs={setShowExecs}
                showAddExec={showAddExec}
                setShowAddExec={setShowAddExec}
            />
            {showInventory && <Inventory />}
            {showAddInventory && <AddInventory />}
            {showExecs && <Execs />}
            {showAddExec && <AddExec />}
        </div>
    )
}

export default ExecDash
