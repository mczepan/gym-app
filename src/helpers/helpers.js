import { ReactComponent as All } from 'assets/images/all.svg';
import { ReactComponent as Back } from 'assets/images/back.svg';
import { ReactComponent as Cardio } from 'assets/images/cardio.svg';
import { ReactComponent as Chest } from 'assets/images/chest.svg';
import { ReactComponent as LowerArms } from 'assets/images/lower_arms.svg';
import { ReactComponent as LowerLegs } from 'assets/images/lower_legs.svg';
import { ReactComponent as Neck } from 'assets/images/neck.svg';
import { ReactComponent as Shoulders } from 'assets/images/shoulders.svg';
import { ReactComponent as UpperArms } from 'assets/images/upper_arms.svg';
import { ReactComponent as UpperLegs } from 'assets/images/upper_legs.svg';
import { ReactComponent as Waist } from 'assets/images/waist.svg';

export const bodyParts = [
    { name: 'all', iconRender: () => <All /> },
    { name: 'back', iconRender: () => <Back /> },
    { name: 'cardio', iconRender: () => <Cardio /> },
    { name: 'chest', iconRender: () => <Chest /> },
    { name: 'lower arms', iconRender: () => <LowerArms /> },
    { name: 'lower legs', iconRender: () => <LowerLegs /> },
    { name: 'neck', iconRender: () => <Neck /> },
    { name: 'shoulders', iconRender: () => <Shoulders /> },
    { name: 'upper arms', iconRender: () => <UpperArms /> },
    { name: 'upper legs', iconRender: () => <UpperLegs /> },
    { name: 'waist', iconRender: () => <Waist /> },
];
