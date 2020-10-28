import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import checkPropsTypes from "check-prop-types";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../../test/testUtils";

// set up for enzyme adapter ( not official for react version 17)
Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text when "succes" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders non-empty congrats message when "success" is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "component-message");
  expect(message.text().length).not.toBe(0);
});
test("does not  throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
