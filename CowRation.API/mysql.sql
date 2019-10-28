IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Korms] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [Price] decimal(18,2) NOT NULL,
    CONSTRAINT [PK_Korms] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Users] (
    [Id] int NOT NULL IDENTITY,
    [UserName] nvarchar(max) NULL,
    [PasswordHash] varbinary(max) NULL,
    [PasswordSalt] varbinary(max) NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190428083800_Init', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Users] ADD [FirstName] nvarchar(max) NULL;

GO

ALTER TABLE [Users] ADD [LastName] nvarchar(max) NULL;

GO

CREATE TABLE [KormUser] (
    [KormId] int NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_KormUser] PRIMARY KEY ([KormId], [UserId]),
    CONSTRAINT [FK_KormUser_Korms_KormId] FOREIGN KEY ([KormId]) REFERENCES [Korms] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_KormUser_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_KormUser_UserId] ON [KormUser] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190503064830_RaltionKormUser', N'2.2.4-servicing-10062');

GO

CREATE TABLE [CatalogIndexFoods] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_CatalogIndexFoods] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [RationResults] (
    [Id] int NOT NULL IDENTITY,
    [Weight] float NOT NULL,
    [MilkCount] float NOT NULL,
    [Fat] float NOT NULL,
    [Protein] float NOT NULL,
    [UserId] int NULL,
    CONSTRAINT [PK_RationResults] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_RationResults_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [Storages] (
    [Id] int NOT NULL IDENTITY,
    [FoodValue] float NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_Storages] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Storages_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [CharacterizationIndexFoods] (
    [Id] int NOT NULL IDENTITY,
    [Value] float NOT NULL,
    [CatalogIndexFoodId] int NOT NULL,
    [KormId] int NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_CharacterizationIndexFoods] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CharacterizationIndexFoods_CatalogIndexFoods_CatalogIndexFoodId] FOREIGN KEY ([CatalogIndexFoodId]) REFERENCES [CatalogIndexFoods] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CharacterizationIndexFoods_Korms_KormId] FOREIGN KEY ([KormId]) REFERENCES [Korms] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CharacterizationIndexFoods_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [LaboratoryIndexFoods] (
    [Id] int NOT NULL IDENTITY,
    [Value] float NOT NULL,
    [CatalogIndexFoodId] int NOT NULL,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_LaboratoryIndexFoods] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_LaboratoryIndexFoods_CatalogIndexFoods_CatalogIndexFoodId] FOREIGN KEY ([CatalogIndexFoodId]) REFERENCES [CatalogIndexFoods] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_LaboratoryIndexFoods_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Rations] (
    [Id] int NOT NULL IDENTITY,
    [Quantity] float NOT NULL,
    [RationId] int NOT NULL,
    [RationResultId] int NULL,
    CONSTRAINT [PK_Rations] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Rations_RationResults_RationResultId] FOREIGN KEY ([RationResultId]) REFERENCES [RationResults] ([Id]) ON DELETE NO ACTION
);

GO

CREATE TABLE [KormStorage] (
    [KormId] int NOT NULL,
    [StorageId] int NOT NULL,
    CONSTRAINT [PK_KormStorage] PRIMARY KEY ([KormId], [StorageId]),
    CONSTRAINT [FK_KormStorage_Korms_KormId] FOREIGN KEY ([KormId]) REFERENCES [Korms] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_KormStorage_Storages_StorageId] FOREIGN KEY ([StorageId]) REFERENCES [Storages] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_CharacterizationIndexFoods_CatalogIndexFoodId] ON [CharacterizationIndexFoods] ([CatalogIndexFoodId]);

GO

CREATE INDEX [IX_CharacterizationIndexFoods_KormId] ON [CharacterizationIndexFoods] ([KormId]);

GO

CREATE INDEX [IX_CharacterizationIndexFoods_UserId] ON [CharacterizationIndexFoods] ([UserId]);

GO

CREATE INDEX [IX_KormStorage_StorageId] ON [KormStorage] ([StorageId]);

GO

CREATE INDEX [IX_LaboratoryIndexFoods_CatalogIndexFoodId] ON [LaboratoryIndexFoods] ([CatalogIndexFoodId]);

GO

CREATE INDEX [IX_LaboratoryIndexFoods_UserId] ON [LaboratoryIndexFoods] ([UserId]);

GO

CREATE INDEX [IX_RationResults_UserId] ON [RationResults] ([UserId]);

GO

CREATE INDEX [IX_Rations_RationResultId] ON [Rations] ([RationResultId]);

GO

CREATE INDEX [IX_Storages_UserId] ON [Storages] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190521102428_AddModels', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Storages] DROP CONSTRAINT [FK_Storages_Users_UserId];

GO

DROP INDEX [IX_Storages_UserId] ON [Storages];

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Storages]') AND [c].[name] = N'UserId');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Storages] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [Storages] DROP COLUMN [UserId];

GO

ALTER TABLE [Users] ADD [StorageId] int NOT NULL DEFAULT 0;

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Korms]') AND [c].[name] = N'Price');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Korms] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [Korms] ALTER COLUMN [Price] float NOT NULL;

GO

CREATE INDEX [IX_Users_StorageId] ON [Users] ([StorageId]);

GO

ALTER TABLE [Users] ADD CONSTRAINT [FK_Users_Storages_StorageId] FOREIGN KEY ([StorageId]) REFERENCES [Storages] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190521122950_UpdateStorage', N'2.2.4-servicing-10062');

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190523111434_FixRelaship', N'2.2.4-servicing-10062');

GO

DECLARE @var2 sysname;
SELECT @var2 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[KormStorage]') AND [c].[name] = N'Id');
IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [KormStorage] DROP CONSTRAINT [' + @var2 + '];');
ALTER TABLE [KormStorage] DROP COLUMN [Id];

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190523134342_AddFoodValue', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Users] ADD [Role] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190531114252_AddRoleUser', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Users] DROP CONSTRAINT [FK_Users_FeedingCategories_FeedingCategoryId];

GO

DROP INDEX [IX_Users_FeedingCategoryId] ON [Users];

GO

DECLARE @var3 sysname;
SELECT @var3 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Users]') AND [c].[name] = N'FeedingCategoryId');
IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [Users] DROP CONSTRAINT [' + @var3 + '];');
ALTER TABLE [Users] DROP COLUMN [FeedingCategoryId];

GO

DECLARE @var4 sysname;
SELECT @var4 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Users]') AND [c].[name] = N'LaboratoryIndexFoodId');
IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [Users] DROP CONSTRAINT [' + @var4 + '];');
ALTER TABLE [Users] DROP COLUMN [LaboratoryIndexFoodId];

GO

ALTER TABLE [FeedingCategories] ADD [UserId] int NOT NULL DEFAULT 0;

GO

CREATE UNIQUE INDEX [IX_FeedingCategories_UserId] ON [FeedingCategories] ([UserId]);

GO

ALTER TABLE [FeedingCategories] ADD CONSTRAINT [FK_FeedingCategories_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190609081351_AddFeedingCategory', N'2.2.4-servicing-10062');

GO

DROP INDEX [IX_LaboratoryIndexFoods_UserId] ON [LaboratoryIndexFoods];

GO

DECLARE @var5 sysname;
SELECT @var5 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[LaboratoryIndexFoods]') AND [c].[name] = N'Value');
IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [LaboratoryIndexFoods] DROP CONSTRAINT [' + @var5 + '];');
ALTER TABLE [LaboratoryIndexFoods] DROP COLUMN [Value];

GO

CREATE INDEX [IX_LaboratoryIndexFoods_UserId] ON [LaboratoryIndexFoods] ([UserId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190610234708_AddLaboratory', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Laboratories] DROP CONSTRAINT [FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId];

GO

DROP INDEX [IX_Laboratories_LaboratoryIndexFoodId] ON [Laboratories];
DECLARE @var6 sysname;
SELECT @var6 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Laboratories]') AND [c].[name] = N'LaboratoryIndexFoodId');
IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [Laboratories] DROP CONSTRAINT [' + @var6 + '];');
ALTER TABLE [Laboratories] ALTER COLUMN [LaboratoryIndexFoodId] int NOT NULL;
CREATE INDEX [IX_Laboratories_LaboratoryIndexFoodId] ON [Laboratories] ([LaboratoryIndexFoodId]);

GO

ALTER TABLE [Laboratories] ADD CONSTRAINT [FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId] FOREIGN KEY ([LaboratoryIndexFoodId]) REFERENCES [LaboratoryIndexFoods] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190613101434_LaboratoryDeleteCoscade', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Users] ADD [CowCount] int NOT NULL DEFAULT 0;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190613105524_CowCountToUser', N'2.2.4-servicing-10062');

GO

ALTER TABLE [CharacterizationIndexFoods] DROP CONSTRAINT [FK_CharacterizationIndexFoods_Users_UserId];

GO

ALTER TABLE [Rations] DROP CONSTRAINT [FK_Rations_RationResults_RationResultId];

GO

DROP TABLE [RationResults];

GO

DROP INDEX [IX_Rations_RationResultId] ON [Rations];

GO

DROP INDEX [IX_CharacterizationIndexFoods_UserId] ON [CharacterizationIndexFoods];

GO

DECLARE @var7 sysname;
SELECT @var7 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Rations]') AND [c].[name] = N'RationResultId');
IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [Rations] DROP CONSTRAINT [' + @var7 + '];');
ALTER TABLE [Rations] DROP COLUMN [RationResultId];

GO

DECLARE @var8 sysname;
SELECT @var8 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[CharacterizationIndexFoods]') AND [c].[name] = N'UserId');
IF @var8 IS NOT NULL EXEC(N'ALTER TABLE [CharacterizationIndexFoods] DROP CONSTRAINT [' + @var8 + '];');
ALTER TABLE [CharacterizationIndexFoods] DROP COLUMN [UserId];

GO

EXEC sp_rename N'[Rations].[RationId]', N'KormId', N'COLUMN';

GO

EXEC sp_rename N'[Rations].[Quantity]', N'Value', N'COLUMN';

GO

ALTER TABLE [Rations] ADD [FeedingCategoryId] int NOT NULL DEFAULT 0;

GO

CREATE INDEX [IX_Rations_FeedingCategoryId] ON [Rations] ([FeedingCategoryId]);

GO

CREATE INDEX [IX_Rations_KormId] ON [Rations] ([KormId]);

GO

ALTER TABLE [Rations] ADD CONSTRAINT [FK_Rations_FeedingCategories_FeedingCategoryId] FOREIGN KEY ([FeedingCategoryId]) REFERENCES [FeedingCategories] ([Id]) ON DELETE CASCADE;

GO

ALTER TABLE [Rations] ADD CONSTRAINT [FK_Rations_Korms_KormId] FOREIGN KEY ([KormId]) REFERENCES [Korms] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190613175748_RationTableChange', N'2.2.4-servicing-10062');

GO

ALTER TABLE [CatalogIndexFoods] ADD [Limitation] float NOT NULL DEFAULT 0.0E0;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190613185912_AddLimitationColumn', N'2.2.4-servicing-10062');

GO

ALTER TABLE [Rations] DROP CONSTRAINT [FK_Rations_FeedingCategories_FeedingCategoryId];

GO

EXEC sp_rename N'[Rations].[FeedingCategoryId]', N'TaskId', N'COLUMN';

GO

EXEC sp_rename N'[Rations].[IX_Rations_FeedingCategoryId]', N'IX_Rations_TaskId', N'INDEX';

GO

CREATE TABLE [TaskRations] (
    [Id] int NOT NULL IDENTITY,
    [UserId] int NOT NULL,
    CONSTRAINT [PK_TaskRations] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_TaskRations_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_TaskRations_UserId] ON [TaskRations] ([UserId]);

GO

ALTER TABLE [Rations] ADD CONSTRAINT [FK_Rations_TaskRations_TaskId] FOREIGN KEY ([TaskId]) REFERENCES [TaskRations] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190616172328_TaskTable', N'2.2.4-servicing-10062');

GO

DECLARE @var9 sysname;
SELECT @var9 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Expenses]') AND [c].[name] = N'Article');
IF @var9 IS NOT NULL EXEC(N'ALTER TABLE [Expenses] DROP CONSTRAINT [' + @var9 + '];');
ALTER TABLE [Expenses] DROP COLUMN [Article];

GO

ALTER TABLE [Expenses] ADD [ExpendituresId] int NOT NULL DEFAULT 0;

GO

CREATE TABLE [Expenditures] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Expenditures] PRIMARY KEY ([Id])
);

GO

CREATE INDEX [IX_Expenses_ExpendituresId] ON [Expenses] ([ExpendituresId]);

GO

ALTER TABLE [Expenses] ADD CONSTRAINT [FK_Expenses_Expenditures_ExpendituresId] FOREIGN KEY ([ExpendituresId]) REFERENCES [Expenditures] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190626195351_Expenses', N'2.2.4-servicing-10062');

GO

EXEC sp_rename N'[Users].[LastName]', N'Email', N'COLUMN';

GO

EXEC sp_rename N'[Users].[FirstName]', N'CompanyName', N'COLUMN';

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190627153243_ChangeUser', N'2.2.4-servicing-10062');

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20190705154110_ChangeKormModel', N'2.2.4-servicing-10062');

GO

