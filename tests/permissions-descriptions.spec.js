const permissions = require('../permissions/permissions-descriptions.json');

describe('Permissions descriptions consistency', function() {
  const permissionsList = permissions.delegatedScopesList;

  for (const permission of permissionsList) {
    describe(`${permission.value}:`, function() {
      
      it('adminConsentDisplayName should not have trailing spaces', function() {
        const displayName = permission.adminConsentDisplayName || '';
        expect(displayName).toEqual(displayName.trimEnd());
      });

      it('consentDisplayName should not have trailing spaces', function() {
        const displayName = permission.consentDisplayName || '';
        expect(displayName).toEqual(displayName.trimEnd());
      });

      it('adminConsentDisplayName should not have leading spaces', function() {
        const displayName = permission.adminConsentDisplayName || '';
        expect(displayName).toEqual(displayName.trimStart());
      });

      it('consentDisplayName should not have leading spaces', function() {
        const displayName = permission.consentDisplayName || '';
        expect(displayName).toEqual(displayName.trimStart());
      });

      it('display names should not end with periods (for consistency)', function() {
        const adminDisplayName = permission.adminConsentDisplayName || '';
        const consentDisplayName = permission.consentDisplayName || '';
        
        [adminDisplayName, consentDisplayName].forEach(displayName => {
          expect(displayName.endsWith('.')).toBe(false);
        });
      });
    });
  }
});