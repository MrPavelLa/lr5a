import React, { useEffect } from 'react';

const FilterBlock = ({
  workshops,
  selectedWorkshops,
  setSelectedWorkshops,
  needsRepair,
  setNeedsRepair,
  manufacturers,
  selectedManufacturers,
  setSelectedManufacturers,
  resetFilters,
  searchTerm,
  setSearchTerm,
  page,
  sortType,
  setSortType,
}) => {
  
  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <div className='FilterBlock'>
      <div>
        {!searchTerm && (
        <label>
          Цех:
          <ul>
            {workshops.map((workshop) => (
              <li key={workshop}>
                <label>
                  <input
                    type='checkbox'
                    value={workshop}
                    checked={selectedWorkshops.includes(workshop)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setSelectedWorkshops((prev) =>
                        isChecked
                          ? [...prev, workshop]
                          : prev.filter((selectedWorkshop) => selectedWorkshop !== workshop)
                      );
                    }}
                  />
                  {workshop}
                </label>
              </li>
            ))}
          </ul>
        </label>
        )}
      </div>
      {page === 'Equipment' && !searchTerm && (
      <div>
        <label>
          <input
            type='checkbox'
            checked={needsRepair}
            onChange={() => setNeedsRepair(!needsRepair)}
          />
          Требует ремонта
        </label>
      </div>
      )}
      <div>
        {!searchTerm && (
        <label>
          Производитель:
          <ul>
            {manufacturers.map((manufacturer) => (
              <li key={manufacturer}>
                <label>
                  <input
                    type='checkbox'
                    value={manufacturer}
                    checked={selectedManufacturers.includes(manufacturer)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setSelectedManufacturers((prev) =>
                        isChecked
                          ? [...prev, manufacturer]
                          : prev.filter(
                            (selectedManufacturer) => selectedManufacturer !== manufacturer
                          )
                      );
                    }}
                  />
                  {manufacturer}
                </label>
              </li>
            ))}
          </ul>
        </label>
          )}
        <div>
          <label>
            Инвентарный номер:
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>
      {page === 'Journal' && (
       <div>
       <label>
         Сортировка по дате ремонта:
         <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
           <option value='asc'>По возрастанию</option>
           <option value='desc'>По убыванию</option>
         </select>
       </label>
     </div>
      )}
      <button onClick={resetFilters}>Сбросить фильтры</button>
    </div>
  );
};

export default FilterBlock;
