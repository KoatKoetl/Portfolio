import data_AllSkills from '../Data/Skills_Data';
import { SkillSets } from '../Skills';

describe('Test skills data', () => {
  const skillSet = new SkillSets(data_AllSkills);

  test('Check missing data values', () => {
    const getSkillValues = skillSet.check_dataMissing();

    getSkillValues.forEach((skill) => {
      if (!skill.name) {
        expect(skill.name).toBe('No info');
      } else {
        expect(skill.name).toBe(skill.name);
      }
      if (!skill.name) {
        expect(skill.name).toBe('../assets/missing-skills-image.svg');
      } else {
        expect(skill.name).toBe(skill.name);
      }
    });
  });
});
