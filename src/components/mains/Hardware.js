import React from 'react';

const Hardware = ({inventoryNumber, workshop, name, needsRepair, lastMaintenanceDate, powerConsumption, manufacturer }) => {
  return (
    <div className='Hardware'>
      <h3>{name}</h3>
      <p>Цех: <span style={{ fontWeight: 'bold' }}>{workshop}</span></p>
      <p>Необходим ремонт: <span style={{ fontWeight: 'bold' }}>{needsRepair ? 'Да' : 'Нет'}</span></p>
      <p>Последняя дата обслуживания: <span style={{ fontWeight: 'bold' }}>{lastMaintenanceDate}</span></p>
      <p>Питание:<span style={{ fontWeight: 'bold' }}> {powerConsumption}</span></p>
      <p>Производитель: <span style={{ fontWeight: 'bold' }}>{manufacturer}</span></p>
      <p>Инвентарный номер:<span style={{ fontWeight: 'bold' }}> {inventoryNumber}</span></p>
    </div>
  );
};

export default Hardware;
