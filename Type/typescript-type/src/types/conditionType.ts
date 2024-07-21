type CustomDate = Date;
type CustomString1 = string;

type TrueString = CustomString1 extends string ? 'Yes' : 'No'; // 'Yes'
type ConditionNumber = CustomDate extends Date ? number : string; // number
type DateAssignment = CustomDate extends Date ? Date : string; // Date
