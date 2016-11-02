﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using TourCity.Common;

namespace TourCity.Repository.Repositories
{
    public abstract class RepositoryBase<T> where T : EntityBase
    {
        protected readonly DbContext _context;
        protected readonly IDbSet<T> _entities;

        protected RepositoryBase(DbContext context)
        {
            _context = context;
            _entities = _context.Set<T>();
        }

        public void Create(T entity)
        {
            _entities.Add(entity);
        }

        public T Retrieve(int id)
        {
            return _entities.Find(id);
        }

        public List<T> Retrieve(Expression<Func<T, bool>> query)
        {
            return _entities.Where(query).ToList();
        }

        public List<T> Retrieve()
        {
            return _entities.Where(c => c.IsActive).ToList();
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public void Update(int id, T entity)
        {
            var oldEntity = Retrieve(id);

            entity.Id = oldEntity.Id;

            _context.Entry(oldEntity).CurrentValues.SetValues(entity);

        }

        public void Delete(T entity)
        {
            entity.IsActive = false;
        }

        public void Delete(int id)
        {
            var itemToDelete = Retrieve(id);
            Delete(itemToDelete);
        }

        public void HardDelete(T entity)
        {
            _entities.Remove(entity);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}