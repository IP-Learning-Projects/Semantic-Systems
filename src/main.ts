import { Address } from './models/base-models/address';
import { Animal } from './models/base-models/animal';
import { BusinessMan } from './models/base-models/business-man';
import { MeasurementUnit } from './models/base-models/measurement-unit';
import { NonLivingEntity } from './models/base-models/non-living-entity';
import { PersonalInformation } from './models/base-models/personal-information';
import { BobTheBuilder } from './models/bob-the-builder';
import { BusinessCard } from './models/business-card';
import { DumboTheElephant } from './models/dumbo-the-elephant';
import { InformationReprezentation } from './models/information-reprezentation';
import { Rock } from './models/rock';
import { query } from './query';

// I will create and query for data all the specialized classes and their first ancestor class to illustrate the inheritance

const businessMan = new BusinessMan(
    new MeasurementUnit(100, 'kg'),
    new MeasurementUnit(2, 'm'),
    new MeasurementUnit(20000, 'lei')
);
query(businessMan);

const bobTheBuilder = new BobTheBuilder();
query(bobTheBuilder);

const animal = new Animal(new MeasurementUnit(2000, 'kg'), new MeasurementUnit(3, 'm'), 'male');
query(animal);

const dumboTheElephant = new DumboTheElephant();
query(dumboTheElephant);

const nonLivingEntity = new NonLivingEntity(new MeasurementUnit(100, 'kg'), new MeasurementUnit(5, 'm'));
query(nonLivingEntity);
const rock = new Rock();
query(rock);

const informationReprezentation = new InformationReprezentation(
    new MeasurementUnit(100, 'kg'),
    new MeasurementUnit(5, 'm')
);
query(informationReprezentation);
const address = new Address('Neverland', 'Town', 'Imaginary');
query(address);
const personalInformation = new PersonalInformation('Bob');
query(personalInformation);

const businessCard = new BusinessCard(new MeasurementUnit(100, 'kg'), new MeasurementUnit(5, 'm'));
query(businessCard);
