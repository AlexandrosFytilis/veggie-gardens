import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../general/utils/colors";
import { useDeleteVegetable } from "../hooks/useDeleteVegetable";
import { usePlantVegetable } from "../hooks/usePlantVegetable";
export const SingleVegetable = ({ item }) => {
    const deleteVegetable = useDeleteVegetable();
    const plantVegetable = usePlantVegetable();
    const [plantedDate, setPlantedDate] = useState((new Date()).toLocaleDateString("en-CA"));
    const currentDate = new Date().toLocaleDateString("en-CA");
    const daysBeforeHarvest = item.harvest - ((Date.parse(currentDate) - Date.parse(item.datePlanted)) / 24 / 60 / 60 / 1000);
    return (React.createElement(Wrapper, null,
        item.datePlanted !== null ? (React.createElement(VegetableContainer, null,
            React.createElement(Image, { src: item.img }),
            React.createElement(DescriptionContainer, null,
                React.createElement(VegetableCounter, null,
                    React.createElement(VegetableName, null,
                        React.createElement(Span, null, item.name))),
                React.createElement(Para, null,
                    React.createElement(Span, null, "Planted:"),
                    " ",
                    item.datePlanted),
                daysBeforeHarvest > 0 ? (React.createElement(Para, null,
                    "First available harvest in approximately: ",
                    daysBeforeHarvest,
                    " days")) : (React.createElement(Para, null, "Harvesting Time!"))))) : (React.createElement(VegetableContainer, null,
            React.createElement(Image, { src: item.img }),
            React.createElement(DescriptionContainer, null,
                React.createElement(VegetableCounter, null,
                    React.createElement(VegetableName, null,
                        React.createElement(Span, null, item.name))),
                React.createElement(Para, null,
                    React.createElement(Span, null, "not planted*")),
                React.createElement(Input, { onChange: (e) => {
                        setPlantedDate(e.target.value);
                    }, type: "date", id: "start", name: "trip-start", value: plantedDate, min: "2022-09-01", max: "2022-12-31" })))),
        React.createElement(ButtonsContainer, null,
            React.createElement(Button, { onClick: () => { deleteVegetable(item.id); } }, "Remove"),
            item.datePlanted === null && (React.createElement(Button, { onClick: () => {
                    if (plantedDate.length > 0) {
                        plantVegetable(item, plantedDate);
                    }
                    else {
                        alert("error");
                    }
                } }, "Plant")))));
};
const Wrapper = styled.div `
  border-bottom: solid black 1px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  height: 12vh;

  background: ${COLORS.primaryColor};
`;
const VegetableContainer = styled.div `
  display: flex;
`;
const VegetableCounter = styled.div `
  display: flex;
  align-items: center;
`;
const Image = styled.img `
  width: 100px;
  height: 100px;

  border: solid 2px black;
`;
const VegetableName = styled.p `
  font-size: 28px;
  color: ${COLORS.tertiaryColor};
`;
const Para = styled.p `
  font-size: 20px;
  color: ${COLORS.tertiaryColor};
`;
const DescriptionContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 15px;
`;
const Span = styled.span `
  font-weight: bold;
`;
const Input = styled.input `
  width: 160px;
  border: solid 2px ${COLORS.tertiaryColor};
`;
const ButtonsContainer = styled.div `
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
const Button = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;

  &:hover {
    background: ${COLORS.tertiaryColor};
    color: ${COLORS.darkPrimaryColor};
    border: solid 2px ${COLORS.darkPrimaryColor};
  }
`;
// const IncrementalButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 5px;
//   width: 30px;
//   height: 30px;
//   border-radius: 100px;
//   &:hover {
//     background: ${COLORS.tertiaryColor};
//     color: ${COLORS.darkPrimaryColor};
//     border: solid 2px ${COLORS.darkPrimaryColor};
//   }
// `;
