import React, { useState, useEffect } from 'react';
import Hardware from './Hardware';
import EquipmentData from '../data/equipment.json';
import FilterBlock from './FilterBlock.js';
import '../../styles/Equipment.css';

const Equipment = () => {
  const [originalData, setOriginalData] = useState(EquipmentData.equipment);
  const [filteredData, setFilteredData] = useState(originalData);
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [needsRepair, setNeedsRepair] = useState(false);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageName, setpageName] = useState('Equipment');

  useEffect(() => {
    filterEquipment();
  }, [selectedWorkshops, needsRepair, selectedManufacturers, searchTerm]);

  const workshops = Array.from(new Set(originalData.map((equipment) => equipment.workshop)));
  const manufacturers = Array.from(new Set(originalData.map((equipment) => equipment.manufacturer)));

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
  
    setFilteredData(updatedFilteredData);
  };
  
  const resetFilters = () => {
    setSelectedWorkshops([]);
    setNeedsRepair(false);
    setSelectedManufacturers([]);
    setFilteredData(originalData);
  };

  return (
    <div className='Equipment'>
      <div>
        {filteredData.map((equipment) => (
          <Hardware key={equipment.id} {...equipment} />
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
          page = {pageName}
        />
      </div>
    </div>
  );
};

export default Equipment;
