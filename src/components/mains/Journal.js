import React, { useState, useEffect } from 'react';
import '../../styles/Journal.css';
import EquipmentData from '../data/equipment.json';
import RecordsData from '../data/repairRecords.json';
import FilterBlock from './FilterBlock.js';

const Journal = () => {
  const [originalData, setOriginalData] = useState(EquipmentData.equipment);
  const [combinedData, setCombinedData] = useState([]);
  const [filteredData, setFilteredData] = useState(originalData);
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [needsRepair, setNeedsRepair] = useState(false);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageName, setpageName] = useState('Journal');
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    combineData();
    filterEquipment();
  }, [selectedWorkshops, needsRepair, selectedManufacturers, searchTerm, sortType]);

  const workshops = Array.from(new Set(originalData.map((equipment) => equipment.workshop)));
  const manufacturers = Array.from(new Set(originalData.map((equipment) => equipment.manufacturer)));

  const combineData = () => {
    const combined = RecordsData.repairRecords.map((record) => {
      const equipment = EquipmentData.equipment.find(
        (item) => item.inventoryNumber === record.inventoryNumber
      );

      return {
        ...record,
        equipment: equipment || null,
      };
    });

    setCombinedData(combined);
  };

  const filterEquipment = () => {
    let updatedFilteredData = [...originalData];

    if (selectedWorkshops.length > 0) {
      updatedFilteredData = updatedFilteredData.filter((equipment) =>
        selectedWorkshops.includes(equipment.workshop)
      );
    }

    if (needsRepair) {
      updatedFilteredData = updatedFilteredData.filter((equipment) => equipment.needsRepair);
    }

    if (selectedManufacturers.length > 0) {
      updatedFilteredData = updatedFilteredData.filter((equipment) =>
        selectedManufacturers.includes(equipment.manufacturer)
      );
    }

    if (searchTerm) {
      updatedFilteredData = updatedFilteredData.filter((equipment) =>
        equipment.inventoryNumber.toString().includes(searchTerm)
      );
    }

    const sortedFilteredData = combinedData
      .filter((item) => updatedFilteredData.some((e) => e.inventoryNumber === item.inventoryNumber))
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (sortType === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });

    setFilteredData(sortedFilteredData);
  };

  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleDescription = (itemId) => {
    setExpandedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  const resetFilters = () => {
    setSelectedWorkshops([]);
    setNeedsRepair(false);
    setSelectedManufacturers([]);
    setSearchTerm('');
    setFilteredData(originalData);
  };

  return (
    <div className='Journal'>
      <div className='CardContainer'>
        <table>
          <thead>
            <tr style={{ backgroundColor: "rgba(0, 0, 255, 0.1)" }}>
              <th style={{ width: '5%' }}>ID</th>
              <th style={{ width: '8%' }}>Дата</th>
              <th style={{ width: '9%' }}>Стоимость</th>
              <th style={{ width: '10%' }}>Инвентарный №</th>
              <th style={{ width: '15%' }}>Название</th>
              <th style={{ width: '10%' }}>Питание</th>
              <th style={{ width: '15%' }}>Производитель</th>
              <th style={{ width: '5%' }}></th>
            </tr>
          </thead>
        </table>
        {filteredData.map((item) => (
          <div key={item.id} className={`Card ${expandedItemId === item.id ? 'ExpandedCard' : ''}`}>
            <table>
              <tbody>
                <tr key={item.id}>
                  <td style={{ width: '5%' }}>{item.id}</td>
                  <td style={{ width: '8%' }}>{item.date}</td>
                  <td style={{ width: '9%' }}>{item.cost}</td>
                  <td style={{ width: '10%' }}>{item.inventoryNumber}</td>
                  <td style={{ width: '15%' }}>{item.equipment?.name || ''}</td>
                  <td style={{ width: '10%' }}>{item.equipment?.powerConsumption || ''}</td>
                  <td style={{ width: '15%' }}>{item.equipment?.manufacturer || ''}</td>
                  <td style={{ width: '5%', border: "none" }}>
                    <button onClick={() => toggleDescription(item.id)}>+</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {expandedItemId === item.id && (
              <p className='Carddescription'>{item.description}</p>
            )}
          </div>
        ))}
      </div>


      <div className='Filter'>
        <FilterBlock
          workshops={workshops}
          selectedWorkshops={selectedWorkshops}
          setSelectedWorkshops={setSelectedWorkshops}
          needsRepair={needsRepair}
          setNeedsRepair={setNeedsRepair}
          manufacturers={manufacturers}
          selectedManufacturers={selectedManufacturers}
          setSelectedManufacturers={setSelectedManufacturers}
          resetFilters={resetFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          page={pageName}
          sortType={sortType}
          setSortType={setSortType}
        />
      </div>
    </div>
  );
};

export default Journal;
