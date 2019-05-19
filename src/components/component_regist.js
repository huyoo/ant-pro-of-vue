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
	Card as ACard
} from 'ant-design-vue'

Vue.use(AIcon);
Vue.use(ABreadcrumb);
Vue.use(AButton);
Vue.use(ARow);
Vue.use(ACol);
Vue.use(ACard);
Vue.use(AForm);

const AFormItem = AForm.Item;
Vue.use(AFormItem);
Vue.use(AInput);