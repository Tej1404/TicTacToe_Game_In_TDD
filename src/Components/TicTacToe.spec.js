import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fireEvent, render, screen} from '@testing-library/react';
import TicTacToe from './TicTacToe';
// import Square from './Square';

configure({ adapter: new Adapter() });

describe("Basic rendering of the base",()=>{
    test("Should render the game title",()=>{
        const gameTitle = shallow(<TicTacToe/>);
        // console.log(gameTitle.debug());
        expect(gameTitle.find('h1').text()).toContain("TicTacToe");
    })

    test("Should render the game title",()=>{
        const nextPlayer = shallow(<TicTacToe/>);
        // console.log(gameTitle.debug());
        expect(nextPlayer.find('p').text()).toContain("Next Player");
    })

    test("At the start of a game the winner should be empty",()=>{
        const winner = shallow(<TicTacToe/>);
        expect(winner.find('h4').text()).not.toBeDefined;
    })

    test("should render the buttons",()=>{
        const btn= render(<TicTacToe/>);
        expect(btn.getByTestId('btn1')).not.toHaveAttribute('disabled');
    })

    test("button should have a empty value",()=>{
        const btnValue= render(<TicTacToe/>);
        expect(btnValue.getByTestId("btn1")).toHaveTextContent("");
    })
})

describe("testing the functionality of the game",()=>{
    test("Should show X after a clicking a button",()=>{
        // const {getByTestId, getByText}= render(<Square/>);

        // fireEvent.click(screen.getByTestId("button1"));
        // expect(getByTestId("button1")).toHaveTextContent("X");

        // const value= getByText("button");
        // expect(value).toHaveTextContent("X");
        const valueChange= shallow(<TicTacToe/>);
        valueChange.find("#btn1").simulate("click");
        expect(valueChange.find("#btn1").text()).toBe("X");

    })
    test("Should show O after  clicking two buttons",()=>{
        const valueChange= shallow(<TicTacToe/>);
        valueChange.find("#btn1").simulate("click");
        valueChange.find("#btn2").simulate("click");
        expect(valueChange.find("#btn2").text()).toBe("O");

    })

    test("next player value should change after clicking a button once",()=>{
        const nextPlayer=shallow(<TicTacToe/>);
        nextPlayer.find("#btn1").simulate("click");
        expect(nextPlayer.find('p').text()).toContain("O");
    })

    test("should not change the value of a button aftern clicking it once",()=>{
        const valueChange = shallow(<TicTacToe/>);
        valueChange.find("#btn1").simulate("click");
        valueChange.find("#btn1").simulate("click");
        expect(valueChange.find("#btn1").text()).not.toBe("O");
    })

    test("should display winner after succesful completion of the game",()=>{
        const winner= shallow(<TicTacToe/>);
        expect(winner.find('h4').text()).toBeDefined;
    })
})