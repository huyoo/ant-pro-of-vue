/**
 * create by hy ON 2019/4/29
 */
import Vue from 'vue';
import {
	Icon as AIcon,
	Breadcrumb as ABreadcrumb,
	Button as AButton,
	Row as ARow,
	Col as ACol,
	Form as AForm,
	Input as AInput,
	Card as ACard,
	DatePicker as ADatePicker,
	Tooltip as ATooltip,
	InputNumber as AInputNumber,
	Radio as ARadio,
	Modal,
	List as AList,
	Steps as ASteps,
	Divider as ADivider,
	Table as ATable,
	Tabs as ATabs,
	Select as ASelect,
	message
} from 'ant-design-vue'

Vue.use(AIcon);
Vue.use(ABreadcrumb);
Vue.use(AButton);
Vue.use(ARow);
Vue.use(ACol);
Vue.use(ACard);
Vue.use(AForm);
Vue.use(ADatePicker);
Vue.use(ASteps);
const AStep = ASteps;
Vue.use(AStep);
Vue.use(AList);
const AListItem = AList.Item;
Vue.use(AListItem);
Vue.use(ADivider);
Vue.use(ATable);
Vue.use(ATabs);
const ATabPane = ATabs.TabPane;
Vue.use(ATabPane);

const ARangePicker = ADatePicker.RangePicker;
Vue.use(ARangePicker);

Vue.use(ASelect);
const ASelectOption = ASelect.Option;
Vue.use(ASelectOption);

const AFormItem = AForm.Item;
Vue.use(AFormItem);
Vue.use(AInput);
Vue.use(ATooltip);
Vue.use(AInputNumber);
Vue.use(ARadio);

const ARadioGroup = ARadio.Group;
Vue.use(ARadioGroup);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
// Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;