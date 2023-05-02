import styled from "styled-components"
const StatBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;

  & .bar {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 5px;
  }

  & .label {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }`;

export default function BulbasaurStats({ bulbasaur }) {
  return (
    <>
      <StatBar value={bulbasaur.hunger}>Hunger</StatBar>
      <StatBar value={bulbasaur.happiness}>Happiness</StatBar>
      <StatBar value={bulbasaur.health}>Health</StatBar>
    </>
  );
}