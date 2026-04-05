import LeontiefIllustration from './matrices/LeontiefIllustration';
import RotationIllustration from './matrices/RotationIllustration';
import CramerIllustration from './matrices/CramerIllustration';
import MarkovIllustration from './matrices/MarkovIllustration';
import ScalingIllustration from './matrices/ScalingIllustration';
import FilterGainIllustration from './complex/FilterGainIllustration';
import ImpedanceIllustration from './complex/ImpedanceIllustration';
import PolarFormIllustration from './complex/PolarFormIllustration';
import PowerFactorIllustration from './complex/PowerFactorIllustration';
import ResonanceIllustration from './complex/ResonanceIllustration';

export const illustrations = {
  MatricesLeontief: LeontiefIllustration,
  MatricesRotation: RotationIllustration,
  MatricesCramer: CramerIllustration,
  MatricesMarkov: MarkovIllustration,
  MatricesScaling: ScalingIllustration,
  ComplexGain: FilterGainIllustration,
  ComplexImpedance: ImpedanceIllustration,
  ComplexPolar: PolarFormIllustration,
  ComplexPower: PowerFactorIllustration,
  ComplexResonance: ResonanceIllustration,
};
