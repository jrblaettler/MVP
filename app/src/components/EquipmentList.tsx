interface EquipmentProps {
  equipment: undefined | string[];
  handleHasEquipment: (pieceName: string) => void;
}

export const EquipmentList = (props: EquipmentProps): JSX.Element => {
  const renderEquipmentList = (): JSX.Element | JSX.Element[] => {
    return props.equipment ? (
      props.equipment.map((piece: string, i: number) => {
        return (
          <div className='equipment-item' key={i}>
            <input
              onChange={e => props.handleHasEquipment(e.target.id)}
              type='checkbox'
              id={piece}
              name={piece}
            />
            <label htmlFor={piece}>{piece}</label>
          </div>
        );
      })
    ) : (
      <div>Loading</div>
    );
  };
  return (
    <section className='equipment-list'>
      <h3 className='equipment-title'>Select Available Equipment</h3>
      <form>{renderEquipmentList()}</form>
    </section>
  );
};
