import React, { useState } from 'react';
import '../../styles/CreateBlock.css';

const CreateBlock = () => {
  const [newEquipment, setNewEquipment] = useState({
    inventoryNumber: '',
    workshop: '',
    name: '',
    needsRepair: false,
    lastMaintenanceDate: '',
    powerConsumption: '',
    manufacturer: '',
  });

  const [maintenanceRecord, setMaintenanceRecord] = useState({
    inventoryNumber: '',
    maintenanceDate: '',
    description: '',
    cost: '',
  });

  const handleEquipmentChange = (event) => {
    const { name, value } = event.target;
    setNewEquipment((prevEquipment) => ({
      ...prevEquipment,
      [name]: value,
    }));
  };

  const handleMaintenanceChange = (event) => {
    const { name, value } = event.target;
    setMaintenanceRecord((prevMaintenanceRecord) => ({
      ...prevMaintenanceRecord,
      [name]: value,
    }));
  };

  const handleCreateEquipment = () => {
    console.log('Creating new equipment:', newEquipment);
  };

  const handleMaintenanceRecord = () => {
    console.log('Recording maintenance:', maintenanceRecord);
  };

  return (
    <div>
    <div className='NewEquipment'>
      <h3>Создать новое оборудование</h3>
      <label>
        Инвентарный номер:
        <input
          type="text"
          name="inventoryNumber"
          value={newEquipment.inventoryNumber}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Цех:
        <input
          type="text"
          name="workshop"
          value={newEquipment.workshop}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Название:
        <input
          type="text"
          name="name"
          value={newEquipment.name}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Нуждается в ремонте:
        <input
          type="checkbox"
          name="needsRepair"
          checked={newEquipment.needsRepair}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Дата последнего обслуживания:
        <input
          type="text"
          name="lastMaintenanceDate"
          value={newEquipment.lastMaintenanceDate}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Потребление энергии:
        <input
          type="text"
          name="powerConsumption"
          value={newEquipment.powerConsumption}
          onChange={handleEquipmentChange}
        />
      </label>
      <label>
        Производитель:
        <input
          type="text"
          name="manufacturer"
          value={newEquipment.manufacturer}
          onChange={handleEquipmentChange}
        />
      </label>
      <button onClick={handleCreateEquipment}>Создать оборудование</button>
    </div>
  
    <div className='CreateRecord'>
      <h3>Запись обслуживания по инвентарному номеру</h3>
      <label>
        Инвентарный номер:
        <input
          type="text"
          name="inventoryNumber"
          value={maintenanceRecord.inventoryNumber}
          onChange={handleMaintenanceChange}
        />
      </label>
      <label>
        Дата обслуживания:
        <input
          type="text"
          name="maintenanceDate"
          value={maintenanceRecord.maintenanceDate}
          onChange={handleMaintenanceChange}
        />
      </label>
      <label>
        Описание:
        <input
          type="text"
          name="description"
          value={maintenanceRecord.description}
          onChange={handleMaintenanceChange}
        />
      </label>
      <label>
        Стоимость:
        <input
          type="text"
          name="cost"
          value={maintenanceRecord.cost}
          onChange={handleMaintenanceChange}
        />
      </label>
      <button onClick={handleMaintenanceRecord}>Записать обслуживание</button>
    </div>
  </div>
  
  );
};

export default CreateBlock;
