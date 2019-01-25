import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import 'jest-enzyme';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(dirtyChai);
