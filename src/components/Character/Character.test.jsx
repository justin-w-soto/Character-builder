import { render, screen } from '@testing-library/react';
import Character from './Character';;

it('should display the Character component', () => {
    const {container} = render(<Character head='alien' middle='cool' pants='bread' />);
  
    const head = screen.getByLabelText(/Head/);
    const middle = screen.getByLabelText(/Middle/);
    const pants = screen.getByLabelText(/Pants/);

    expect(head).toHaveStyle(`background-image: url(./alien-head.jpg)`);
    expect(middle).toHaveStyle(`background-image: url(./cool-middle.jpg)`);
    expect(pants).toHaveStyle(`background-image: url(./bread-pants.jpg)`)

  
    expect(container).toMatchSnapshot();
  });