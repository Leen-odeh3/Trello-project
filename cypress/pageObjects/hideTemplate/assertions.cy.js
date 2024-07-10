import SharedAssertions from '../shared/assertions.cy';

const sharedAssertions = new SharedAssertions();

class HideTemplateAssertions {
  checkTemplateInList(listId, templateId) {
    sharedAssertions.checkCardOrTemplateAbsence(listId, templateId);
    return this;
  }
}

export default HideTemplateAssertions;
